import {useState, useCallback} from 'react'

export const useToggle = (initalChecked: boolean = false): [boolean, () => void] => {
    const [checked, setChecked] = useState<boolean>(initalChecked)
    const toggleChecked = useCallback(() => setChecked(checked => !checked), [])
    return [checked, toggleChecked]
}