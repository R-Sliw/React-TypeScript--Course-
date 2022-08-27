export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// type Actions = { type: "SUBMIT"; payload: string };
// //{ type: "DONE"; payload: number };
// //{ type: "DELETE"; payload: number };
// //| { type: "EDIT"; payload: number };

// export const Reducer = (state: any, action: Actions): any => {
//   switch (action.type) {
//     case "SUBMIT":
//       return [
//         ...state.todos,
//         { id: Date.now(), todo: action.payload, isDone: false },
//       ];
//     default:
//       return state;
//   }
// };
