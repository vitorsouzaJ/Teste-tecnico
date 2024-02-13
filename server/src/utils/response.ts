import { Response } from "express";

export const response = (res: Response, status?: number, message?: string, data?: any) => {
  switch (status) {
    case 422:
      status = 422;
      break;
    case 404:
      status = 404;
      break;
    case 200:
      status = 200;
      break;
    case 201:
      status = 201;
      break;
    case 206:
      status = 206;
      break;
    case 502:
      status = 502;
      message ? message : (message = "Erro no processamento da solicitação! Tente novamente.");
      break;
    default:
      status = 503;
      message = "Service unavailable!";
  }

  return res?.status(status).json({ message, data });
};
