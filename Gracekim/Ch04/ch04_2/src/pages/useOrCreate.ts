const cashe: Record<string, any> = {}

export const useOrCreate = <T>(key: string, callback: () => T): T => {
    if (!cashe[key]) cashe[key] = callback()
    return cashe[key] as T
    
}