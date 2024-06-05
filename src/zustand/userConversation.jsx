import { create } from 'zustand';

const useConversation = create((set) => ({
    selectedConversation:null,
    setSelectedConversation:(selected) => set({selectedConversation:selected}),
    messages:[],
    setMessages: (messages) => set({messages})
}))


export default useConversation