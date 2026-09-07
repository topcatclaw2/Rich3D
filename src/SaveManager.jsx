import React,{useEffect,useState} from 'react';
import {listSaves,saveManual,readManual,TTL} from './storage.js';
import {money,worth} from './game.js';
export default function SaveManager({game,onLoad}){
 const [entries,setEntries]=useState([]),[name,setName]=useState(''),[message,setMessage]=useState(''),[confirm,setConfirm]=useState(null);
 const refresh=()=>{try{setEntries(listSaves());}catch{setMessage('無法讀取瀏覽器存檔，請檢查儲存權限或資料格式。');}};
 useEffect(()=>{refresh();const timer=setInterval(refresh,60000);window.addEventListener('storage',refresh);return()=>{clearInterval(timer);window.removeEventListener('storage',refresh);};},[]);
 function save(replace=false){try{const latest=listSaves();setEntries(latest);if(latest.length===10&&!replace){setConfirm({type:'replace'});return;}setEntries(saveManual(game,name,replace));setName('');setConfirm(null);setMessage('已儲存，可保留 30 天。');}catch(e){setConfirm(null);setMessage(`儲存失敗：${e.message} 請確認瀏覽器允許儲存且空間足夠。`);}}
 function load(){try{const saved=readManual(confirm.id);onLoad(saved);}catch(e){setConfirm(null);setMessage(e.message);refresh();}}
 return <div className="save-manager"><p className="modal-lead">遊戲已暫停。手動存檔 {entries.length} / 10，每份保留 30 天；僅此瀏覽器與網站可用。自動存檔另計。</p>
 <label htmlFor="save-name">存檔名稱（選填）</label><input id="save-name" maxLength={60} value={name} onChange={e=>setName(e.target.value)} placeholder={`回合 ${game.round}`}/><button className="primary" onClick={()=>save()}>儲存目前進度</button>
 <p role="status">{message}</p>
 {confirm?<section className="save-confirm"><p>{confirm.type==='replace'?'已有 10 個版本，確定移除最舊版本並儲存目前進度？':'確定讀取此版本？目前未手動儲存的進度將被取代。'}</p><button className="primary" onClick={()=>confirm.type==='replace'?save(true):load()}>確認{confirm.type==='replace'?'取代並儲存':'讀取'}</button><button className="secondary full" onClick={()=>setConfirm(null)}>取消</button></section>:null}
 {!entries.length&&<p>尚無手動存檔。</p>}
 {entries.map(e=><article className="save-entry" key={e.id}><div><strong>{e.name}</strong><small>{new Date(e.savedAt).toLocaleString('zh-TW')}</small><small>回合 {e.game.round} · 你的總資產 {money(worth(e.game,0))}</small><small>到期：{new Date(e.savedAt+TTL).toLocaleString('zh-TW')}</small></div><button className="secondary" onClick={()=>setConfirm({type:'load',id:e.id})}>讀取</button></article>)}
 </div>;
}
