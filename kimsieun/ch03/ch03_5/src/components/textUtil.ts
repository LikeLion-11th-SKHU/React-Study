// prettier-ignore
export const makeClassName = (setting: string, _className?: string, numberOfLines?: num-ber) => 
  [ setting,
    numberOfLines ? `line-clamp-${numberOfLines}` : '',
    _className ]
  .join(' ')
