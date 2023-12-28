
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

            case 'skills':
                response = 'Skills';
                router('/skill')
                break;

            case 'projects':
                response = 'Projects page  ';
                router('/projects')
                break;

            case 'about':
                response = 'About';
                router('/about')
                break;
            case 'contact':
                response = 'contact';
                router('/contact')
                break;
            case 'cls':
                response = '';
                break;
            case 'ls':
                router("/")
                response = 'all commands \n "home" \n "skill" \n "projects" \n "contact" \n "about"';
                break;
            case 'clear':
                response = '';
                break;
            case 'safe':
                router("/")
                response = 'Home Page';
                break;
            case '..':
                router("/")
                response = 'home Page';
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
        <div className=" relative card terminal-demo">
            <Terminal
                autoFocus={true}
                className='bg-inherit min-h-12 h-auto md:min-h-screen shadow-2xl border-none'
                welcomeMessage='Type ls ...'
                prompt="Onesmaket $"

                pt={{
                    root: { className: 'surface-900 text-white' },
                    command: { className: 'text-blue-500' },
                    prompt: { className: 'text-yellow-500' },
                    response: { className: 'text-purple-500' }
                }}
            />
        </div>
    );
}
