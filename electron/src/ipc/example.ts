import { IpcMainInvokeEvent } from "electron";

export interface IReq {
  name: string;
}

export interface IRes {
  message: string;
}

export async function handler(
  event: IpcMainInvokeEvent,
  req: IReq
): Promise<IRes> {
  return {
    message: `Hello, ${req.name} from NodeJs version: ${process.version}`,
  };
}
