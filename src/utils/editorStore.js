import { create } from 'zustand'

 const useEditorStore = create(((set) => ({
    selectedLayer: "canvas",
    textOptions: {
        text: "",
        fontSize: 48,
        color: "#000000",
        top: 48,
        left: 0,
     },
     canvasOptions: {
         height: 0,
         orientation: "",
         size: "original",
         backgroundColor: "#008080"
     },
    setSelectedLayer: (newLayer) => set({ selectedLayer: newLayer }),
    setTextOptions: (newTextOptions) => set({ textOptions: newTextOptions }),
      addText: () => set((state) => ({ textOptions: { ...state.textOptions, text: "Add text" } })),
     setCanvasOptions: (newCanvasOptions) => set({ canvasOptions: newCanvasOptions }),
 })
 ))
  
 export default useEditorStore;

