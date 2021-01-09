import React from 'react'
import Parent from '../Parent/Parent'
import './styles.css'
export default function Navigation() {
    return (
        <div>
           <Parent name="Parent 1" child1="child1of1" child2="child2of1" child3="child3of1" childrenOf="parent1"/>
           <Parent name="Parent 2" child1="child1of2" child2="child2of2" child3="child3of2" childrenOf="parent2"/>
        </div>

    )
}
