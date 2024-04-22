import { contextBridge, ipcRenderer, screen } from 'electron';
import { MainProcessCalls } from '../Types/global/types';

export const contextIsolation = {
  exposeTestFunc: () => {
    contextBridge.exposeInMainWorld("test", {
      sendHello:()=>{
        ipcRenderer.invoke("sendHello");
      },
      receiveHello:(onReceive: (value: any, args: any) => void)=>{
        ipcRenderer.on("sendHello",onReceive);
      },
      openTestWindow:()=>{
        ipcRenderer.invoke(MainProcessCalls.OPEN_NOTE_EDIT);
      },
      openUpdateModal:()=>{
        ipcRenderer.invoke(MainProcessCalls.OPEN_UPDATE_MODAL);
      },
      restartApp:()=>{
        ipcRenderer.invoke(MainProcessCalls.RESTART_APP);
      },
    })
  },
  exposeGlobalWindowUtils:()=>{
    contextBridge.exposeInMainWorld(MainProcessCalls.GLOBAL_WINDOW_UTILS, {
      openNoteEditorWindow:()=>{
        ipcRenderer.invoke(MainProcessCalls.OPEN_NOTE_EDIT);
      },
    })
  },
  exposeAll(){
    this.exposeTestFunc();
    this.exposeGlobalWindowUtils();
  }
};
