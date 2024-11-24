import { IController, IResponse } from '../interfaces/IController';

export class ListLeadsController implements IController {
  async handle(): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        leads: [
          { id: '1', name: 'Fulano' },
          { id: '2', name: 'Sicrano' },
          { id: '3', name: 'Beltrano' },
        ],
      },
    };
  }
}
