import { Message } from 'primereact/message'

const Error = () => {
    return (
        <main>
            <div className=" mt-1">
                <Message className='bg-inherit mt-12' severity='error' text="page not found" />
                <p>go to your safety   type  'safe' or ..  </p>
            </div >
        </main>
    )
}

export default Error