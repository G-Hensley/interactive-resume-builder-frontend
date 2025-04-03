export default function AddableComponent({ name, addContactComponent, removeContactComponent }: { name: string, addContactComponent?: (component: string) => void, removeContactComponent?: (component: string) => void }) {


  const handleClick = () => {
    if (addContactComponent) {
      addContactComponent(name);
    } else if (removeContactComponent) {
      removeContactComponent(name);
    }
  }

  return (
    <button className='bg-slate-500 border-2 border-slate-900 text-white p-2 rounded-md text-md cursor-pointer shadow-lg
     hover:bg-slate-600 active:scale-95 transition-all duration-200'
     onClick={handleClick}>
      {name}
    </button>
  )
}
