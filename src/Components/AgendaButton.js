import React from 'react';
import agendaImg from '../assets/agenda-button.png';

export default function AgendaButton() {
    return (
        <a
            href="/2026/agenda.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open agenda"
            className="fixed right-6 bottom-28 z-50 w-[72px] h-[72px] sm:right-4 sm:bottom-20 sm:w-[60px] sm:h-[60px] flex items-center justify-center transform transition-transform duration-150 ease-in-out hover:scale-[1.2] shadow-lg"
        >
            <img
                src={agendaImg}
                alt="Agenda"
                className="w-full h-full object-contain rounded-full"
            />
        </a>
    );
}
