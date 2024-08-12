// File: estree-jsx.d.ts

declare module 'estree-jsx' {
  import { BaseNode, Expression, Pattern } from 'estree'

  export interface JSXAttribute extends BaseNode {
    type: 'JSXAttribute'
    name: JSXIdentifier | JSXNamespacedName
    value: JSXExpression | Literal | null
  }

  export interface JSXIdentifier extends BaseNode {
    type: 'JSXIdentifier'
    name: string
  }

  export interface JSXNamespacedName extends BaseNode {
    type: 'JSXNamespacedName'
    namespace: JSXIdentifier
    name: JSXIdentifier
  }

  export interface JSXExpression extends BaseNode {
    type: 'JSXExpression'
    expression: Expression | null
  }

  export interface JSXElement extends BaseNode {
    type: 'JSXElement'
    openingElement: JSXOpeningElement
    children: Array<JSXElement | JSXExpression | JSXText>
    closingElement: JSXClosingElement | null
  }

  export interface JSXOpeningElement extends BaseNode {
    type: 'JSXOpeningElement'
    name: JSXIdentifier | JSXNamespacedName
    attributes: Array<JSXAttribute>
    selfClosing: boolean
  }

  export interface JSXClosingElement extends BaseNode {
    type: 'JSXClosingElement'
    name: JSXIdentifier | JSXNamespacedName
  }

  export interface JSXText extends BaseNode {
    type: 'JSXText'
    value: string
  }

  // Add more interfaces as needed for your specific use case
}
