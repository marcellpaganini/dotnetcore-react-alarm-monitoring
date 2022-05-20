import React, { FC, createContext, useState } from 'React';
// learn how to create a context class

interface IContext {
    name: string
}

const Context = createContext<IContext | null>(null)
