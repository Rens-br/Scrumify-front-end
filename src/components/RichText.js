import React, { useState, useMemo } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const RichText = (props) => {
    const editor = useMemo(() => withReact(createEditor()), []);

    return (
        <Slate editor={editor} value={props.value ? props.value : initialValue} onChange={value => { props.onValueChange(value) }}>
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