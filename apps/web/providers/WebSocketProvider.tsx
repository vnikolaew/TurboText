"use client"
import React, { PropsWithChildren, useRef } from "react";
import { atom } from "jotai";

export interface WebSocketProviderProps extends PropsWithChildren {
}

export const WebSocketContext = React.createContext<WebSocket>(null!);
export const useWebSocket = () => React.useContext(WebSocketContext);

export const clientIdAtom = atom<string>(null!);
clientIdAtom.debugLabel = `clientIdAtom`;

const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
   const websocket = useRef<WebSocket>(null!);

   return (
      <WebSocketContext.Provider value={websocket.current}>
         {children}
      </WebSocketContext.Provider>
   );
};

export default WebSocketProvider;