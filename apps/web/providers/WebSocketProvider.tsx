import React, { PropsWithChildren, useRef } from "react";

export interface WebSocketProviderProps extends PropsWithChildren {
}

export const WebSocketContext = React.createContext<WebSocket>(null!);

export const useWebSocket = () => React.useContext(WebSocketContext);

const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
   const websocket = useRef(new WebSocket("ws://localhost:5002"));

   return (
      <WebSocketContext.Provider value={websocket.current}>
         {children}
      </WebSocketContext.Provider>
   );
};

export default WebSocketProvider;