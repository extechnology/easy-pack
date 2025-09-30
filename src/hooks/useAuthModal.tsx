import { useState, useCallback } from "react";



export function useAuthModal() {

    const [open, setOpen] = useState(false);

    const onOpen = useCallback(() => setOpen(true), []);
    const onClose = useCallback(() => setOpen(false), []);

    return { open, onOpen, onClose, setOpen };

}
