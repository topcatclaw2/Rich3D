import React, {useEffect, useRef, useState} from 'react';
import {Music2, Pause, Play} from 'lucide-react';
import musicUrl from '../Velvet_Afternoon.mp3';

const SETTINGS_KEY = 'city-tycoon:background-music:v1';
function readSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    return {enabled: saved?.enabled === true, volume: typeof saved?.volume === 'number' && Number.isFinite(saved.volume) ? Math.max(0, Math.min(100, saved.volume)) : 50};
  } catch { return {enabled: false, volume: 50}; }
}

export default function BackgroundMusic() {
  const [settings, setSettings] = useState(readSettings);
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState('');
  const audio = useRef(null);
  const attempt = useRef(0);

  function play() {
    const id = ++attempt.current;
    setMessage('');
    audio.current.play().catch(error => {
      if (id !== attempt.current) return;
      setMessage(error.name === 'NotAllowedError' ? '點一下播放背景音樂' : '音樂無法播放，請重試');
    });
  }

  useEffect(() => {
    const player = audio.current;
    player.volume = settings.volume / 100;
    if (settings.enabled) play();
    return () => { attempt.current++; player.pause(); };
  }, []);

  useEffect(() => {
    audio.current.volume = settings.volume / 100;
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch { /* Playback works without storage. */ }
  }, [settings]);

  function toggle() {
    if (!audio.current.paused) {
      attempt.current++;
      audio.current.pause();
      setMessage('');
      setSettings(current => ({...current, enabled: false}));
    } else {
      setSettings(current => ({...current, enabled: true}));
      play();
    }
  }

  return <div className="background-music">
    <audio ref={audio} src={musicUrl} loop preload="none" onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => {setPlaying(false); setMessage('音樂無法載入，請重新整理');}} />
    <button className="music-toggle" aria-label={playing ? '關閉背景音樂' : '開啟背景音樂'} aria-pressed={playing} onClick={toggle} title={message || 'Velvet Afternoon'}>
      <Music2 size={16}/><span>背景音樂</span>{playing ? <Pause size={14}/> : <Play size={14}/>}
    </button>
    <label className="music-volume"><span className="music-volume-label">音量</span><input type="range" min="0" max="100" step="1" aria-label="背景音樂音量" value={settings.volume} onChange={event => setSettings(current => ({...current, volume: Number(event.target.value)}))}/><output>{settings.volume}%</output></label>
    {message && <span className="music-message" role="status">{message}</span>}
  </div>;
}
