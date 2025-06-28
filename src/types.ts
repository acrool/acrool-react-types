import CSS from 'csstype';
import {
    ChangeEventHandler,
    Dispatch,
    ReactNode,
    RefCallback,
    RefObject,
    SetStateAction
} from 'react';

/**
 * FCProps 接口用於描述一個功能性組件 (Functional Component) 所接受的基本屬性。
 *
 * 屬性：
 * - `id`（可選）：特定元素的唯一標識符，用於 DOM 操作或識別。
 * - `style`（可選）：行內樣式的屬性，遵循 CSS Properties 的定義，用於自定義元素的外觀。
 * - `className`（可選）：元素的類名，用於應用樣式或 CSS 選擇器。
 */
export interface FCProps {
    id?: string
    style?: CSS.Properties
    className?: string
}

/**
 * FCChildrenProps 介面繼承自 FCProps，並且用於表示具有子元素的 React 元件屬性結構。
 *
 * 此介面主要用於型別檢查，提供對子元素的支援，同時保留一般 FCProps 的屬性。
 * ReactNode 類型的 children 屬性可允許接收包含 React 元素、字串和數字等多種形式的子元素。
 *
 * FCProps 是基底介面，能根據需求擴充額外的屬性。
 *
 * 屬性：
 * - children: 表示該元件可接受的子元素，其類型為 ReactNode，可為可選屬性。
 */
export interface FCChildrenProps extends FCProps {
    children?: ReactNode
}


/**
 * 代表一個表單欄位屬性的介面。
 *
 * @template G 表示綁定的 HTML 元素類型，預設為 `HTMLElement`。
 * @template T 表示欄位值的資料類型，預設為 `string`。
 *
 * @property {RefObject<G> | RefCallback<G>} [ref]
 * 指定欄位元素的引用，可以是 `RefObject` 或 `RefCallback`，用於操作或存取綁定的 DOM 元素。
 *
 * @property {string} [name]
 * 指定表單欄位的名稱。
 *
 * @property {T} [value]
 * 指定欄位的目前值。
 *
 * @property {ChangeEventHandler<G>} [onChange]
 * 為欄位的值變更事件指定回調函數。
 *
 * @property {string} [placeholder]
 * 指定欄位的佔位文字，通常用於提供使用者輸入提示。
 */
export interface IFormFieldProps<G extends HTMLElement, T = string> {
    ref?: RefObject<G> | RefCallback<G>
    name?: string
    value?: T
    onChange?: ChangeEventHandler<G>
}

/**
 * IWithPlaceholder 介面定義了一個包含選用屬性 `placeholder` 的結構。
 *
 * 使用此介面時，可以為其定義一個字串型態的 `placeholder`，通常用於表示佔位符文字。
 *
 * 屬性:
 * - placeholder: 一個選填的字串，用於指定文字的佔位符。
 */
export interface IWithPlaceholder {
    placeholder?: string
}


/**
 * TSetState 類型用於描述用於更新狀態的函式。
 *
 * 該函式可以接受一個新的值或者繼承 `SetStateAction<T>` 的調度行為。
 * 通過調用該函式，可以更新某一特定類型的狀態值。
 *
 * @template T 表示狀態值的類型。
 * @param newValue 指定的新值，該值可以直接提供，也可以是一個函式回傳值，它會基於當前狀態計算出新的狀態。
 * @returns 函式可以不返回值，也可以返回 `Dispatch<SetStateAction<T>>`，取決於使用情境。
 */
export type TSetState<T> = (newValue: T) => void | Dispatch<SetStateAction<T>>
