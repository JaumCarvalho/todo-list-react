// function Input(props) {
//   return (
//     <input
//       className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
//       type={props.type}
//       placeholder={props.placeholder}
//       value={props.value}
//       onChange={props.onChange}
//     />
//   );
// }

// export default Input;

/*******the same code as above, but with a more concise syntax using spread******/
function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props}
    />
  );
}

export default Input;
