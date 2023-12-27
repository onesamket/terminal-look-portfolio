/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { useNavigate } from 'react-router-dom';

export default function TerminalHeader() {
    const router = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const commandHandler = (text: string) => {
        let response;
        const argsIndex: number = text.indexOf(' ');
        const command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'home':
                response = 'Home page  ';
                router('/')
                break;

            case 'skill':
                response = 'Skills  page  ';
                router('/skill')
                break;

            case 'projects':
                response = 'Projects page  ';
                router('/projects')
                break;

            case 'about':
                response = 'About me   ';
                router('/about')
                break;
            case 'contact':
                response = 'contact Me  ';
                router('/contact')
                break;
            case 'cls':
                response = '';
                break;
            case 'clear':
                response = '';
                break;
            case 'safe':
                router("/")
                response = 'your are safe now 😆';
                break;
            case '..':
                router("/")
                response = 'your are safe now 😆';
                break;
            default:
                response = 'unknown command  ';
                router('/error')
                break;
        }

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, [commandHandler]);

    return (
        <div className="card terminal">
            {/* @ts-expect-error  */}
            <Terminal
                className='bg-black  min-h-screen shadow-2xl border-none'
                welcomeMessage=""
                prompt="Onesmaket $"
                pt={{
                    root: ' text-white',
                    prompt: 'text-gray-400 mr-2',
                    command: 'text-primary-300',
                    response: 'text-primary-300'
                }}
            />
        </div>
    );
}
