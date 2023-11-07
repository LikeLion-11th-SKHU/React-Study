//prettier-ignore
export const makeClassName = (setting: string, _className?: string, numberOfLines?: number) =>
  [ setting,
    numberOfLines ? `lie-clamp-${numberOfLines}` : '',
    _className ]
    .join(' ')