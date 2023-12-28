import { zodResolver } from '@hookform/resolvers/zod';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string({
        required_error: "dude name is required",
        invalid_type_error: "are you kidding 🤣 this is not valid name",
    }).min(3, { message: "your name is too short" }).max(20, { message: "I never seen name have more than 20 characters" }),
    email: z.string({
        required_error: "Hi man email is required"
    }).email({ message: "are you kidding 😆 this is not valid email" }),
    message: z.string({
        invalid_type_error: "okay just review your message",
        required_error: "Hi you don't wanna write something to me?"
    }).min(3, { message: "Your message is too short add some thing." }).max(200, { message: "ohh lala  you're so typewriter " })
})

type formType = z.infer<typeof formSchema>;
const Contact = () => {
    const toast = useRef<Toast>(null);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<formType>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (Data: formType) => {

        toast.current?.show({
            severity: 'success',
            className: 'bg-black',
            life: 6000,
            sticky: true,
            content: <div className=" w-full  rounded shadow-2xl flex flex-col justify-center items-center">
                <div className="flex items-center gap-2">
                    <img className='h-14 w-14 rounded-full' src="https:github.com/onesamket.png" />
                    <div className='w-full flex flex-col'>
                        <span className="font-bold text-900">Tewodros Birhanu</span>
                        <a className='text-indigo-100' href="mailto:onesamket@gmail.com">onesamket@gmail.com</a>
                    </div>
                </div>
                <div className='flex mx-auto w-full items-center justify-center'>
                    <p className="font-medium text-lg my-3 text-900"> {Data.name} Thanks to write message!</p>
                </div>
            </div>

        });

        reset();
    };

    return (
        <main>
            <h3 className='text-3xl py-5 flex items-center justify-center'>Contact me</h3>
            <Toast ref={toast} />

            <form className='flex container flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex min-w-[450px] w-full flex-col gap-1 rounded-sm  p-5">
                    <label htmlFor="name">name</label>
                    <input type="text"  {...register('name', { required: true })} className="py-2 px-5 border border-gray-700 outline-none rounded bg-inherit text-white" />
                    {errors.name && <p className='text-red-700'>{errors.name?.message}</p>}
                </div>
                <div className=" flex min-w-[450px] w-full flex-col gap-1 rounded-sm  p-5">
                    <label htmlFor="name">Email</label>
                    <input type="text" {...register('email', { required: true })} className="py-2 px-5 border border-gray-700 outline-none rounded bg-inherit text-white" />
                    {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                </div>
                <div className=" flex min-w-[450px] w-full flex-col gap-1 rounded-sm  p-5">
                    <label htmlFor="name">Message</label>
                    <textarea  {...register('message', { required: true })} className="py-2 px-5 h20 border border-gray-700 outline-none rounded bg-inherit text-white" />
                    {errors.message && <p className='text-red-700'>{errors.message?.message}</p>}
                </div>
                <div className=" flex min-w-[450px] w-full flex-col gap-1 rounded-sm  p-5">
                    <button className='px-5 py-2 rounded-md bg-white text-black' type='submit'>send message</button>
                </div>
            </form>
        </main>

    )
}

export default Contact

