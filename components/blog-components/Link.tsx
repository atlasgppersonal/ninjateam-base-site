/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

import React, { isValidElement } from 'react';

const CustomLink = ({ href, className, children, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  let linkChildren = children;
  if (isValidElement(children) && children.type === 'a') {
    linkChildren = (children as React.DetailedReactHTMLElement<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>).props.children;
  }

  if (isInternalLink) {
    return (
      <Link href={href} className={className} {...rest}>
        {linkChildren}
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} className={className} {...rest}>
      {children}
    </a>
  )
}

export default CustomLink
