export  const Button=({children,onClick,className}: {
    children:React.ReactNode,
    onClick:()=>void,
    className?: string
})=>{
     return(
    <button  onClick={onClick} className={`px-10 py-3 ml-2 mt-4 rounded-md text-white bg-slate-800 ${className?` ${className}`:''}`}>
         {children}
    </button>
     )
}

export  const SecondaryButton=({children,onClick,isSelected,className}: {
     children:React.ReactNode,
     onClick:()=>void,
     isSelected:Boolean,
     className?: string
 })=>{
     console.log("selected"+isSelected);
      return(
     <button  onClick={onClick} className={`px-10 py-3 ml-2 mt-4 rounded-md bg-blue-300  ${isSelected===true?'bg-blue-600':'bg-slate-600'}${className?` ${className}`:''}`}>
          {children}
     </button>
      )
 }