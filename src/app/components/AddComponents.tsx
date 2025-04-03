import AddableComponent from "./AddableComponent";

export default function AddComponents({ contactComponents, addContactComponent }: { contactComponents: string[], addContactComponent: (component: string) => void }) {

  return (
    <div className='bg-slate-800 flex gap-4 flex-col h-fit shadow-lg p-4 rounded-lg text-white'>

      <h2 className='text-2xl font-bold text-center'>Add Components</h2>

      <div className="flex flex-col gap-4">
        {contactComponents.length > 0 ? (
          <>
            <h3 className="text-xl">Contact Components</h3>
            <div className="flex gap-4">
              {contactComponents.map((component) => (
                <AddableComponent key={component} name={component} addContactComponent={addContactComponent} />
              ))}
            </div>
          </>
        ): (<></>)}
      </div>

    </div>
  )

}
