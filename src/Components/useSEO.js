import { useEffect } from "react";

export const useSEO = ({ title, description }) => {
    useEffect(() => {
        // ✅ TITLE (this is why it was not working)
        document.title = title;

        // ✅ META DESCRIPTION
        let meta = document.querySelector('meta[name="description"]');

        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "description");
            document.head.appendChild(meta);
        }

        meta.setAttribute("content", description);
    }, [title, description]);
};
