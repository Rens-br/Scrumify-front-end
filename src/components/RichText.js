import React, { useState, useMemo } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const RichText = () => {
    const [value, setValue] = useState(initialValue)
    const editor = useMemo(() => withReact(createEditor()), []);
    return (
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
            <Editable placeholder="Enter your ticket description..." />
        </Slate>
    )
}

const initialValue = [
    {
        children: [
            { text: '' },
        ],
    },
]

export default RichText