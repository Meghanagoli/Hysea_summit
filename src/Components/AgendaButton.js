import agendaImg from '../assets/agenda-wrapper.svg';

export default function AgendaButton() {
    return (
        <a
            href="/2026/agenda.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open agenda"
            className="fixed right-4 md:right-6 bottom-20 z-50 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] lg:bottom-24 lg:right-10 flex items-center justify-center transform transition-transform duration-150 ease-in-out hover:scale-[1.2]"
        >
            <img
                src={agendaImg}
                alt="Agenda"
                className="w-full h-full object-contain rounded-full"
            />
        </a>
    );
}
