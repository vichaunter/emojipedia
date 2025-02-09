import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TextHighlighted from './TextHighlighted';

describe('TextHighlighted Component', () => {

    it('renders text without highlight when query is empty or contains only spaces', () => {
        const { rerender } = render(<TextHighlighted text="This is some text" query="" />);
        expect(screen.getByText('This is some text')).toBeInTheDocument();

        rerender(<TextHighlighted text="This is some text" query="   " />);
        expect(screen.getByText('This is some text')).toBeInTheDocument();
    });

    it('highlights the matching query in the text (case-insensitive)', () => {
        render(<TextHighlighted text="This is some text" query="some" />);
        const highlightedText = screen.getByText('some');
        expect(highlightedText).toBeInTheDocument();
        expect(highlightedText.classList.contains('bg-yellow-300')).toBe(true);
        expect(highlightedText.classList.contains('font-bold')).toBe(true);

        render(<TextHighlighted text="This is Some text" query="SOME" />);
        const highlightedText2 = screen.getByText('Some');
        expect(highlightedText2).toBeInTheDocument();
    });


    it('highlights multiple occurrences of the query', () => {
        render(<TextHighlighted text="This is some text, some more text" query="some" />);
        const highlightedTexts = screen.getAllByText('some');
        expect(highlightedTexts.length).toBe(2);
        highlightedTexts.forEach(text => expect(text.classList.contains('bg-yellow-300')).toBe(true));
    });

    it('handles queries that are substrings of words', () => {
        render(<TextHighlighted text="This is some text" query="som" />);
        const highlightedText = screen.getByText('som');
        expect(highlightedText).toBeInTheDocument();
    });

    it('handles queries that partially match words', () => {
        render(<TextHighlighted text="This is something text" query="some" />);
        const highlightedText = screen.getByText('some');
        expect(highlightedText).toBeInTheDocument();
    });


    it('applies a custom highlight class', () => {
        render(<TextHighlighted text="This is some text" query="some" highlightClass="custom-class" />);
        const highlightedText = screen.getByText('some');
        expect(highlightedText.classList.contains('custom-class')).toBe(true);
        expect(highlightedText.classList.contains('bg-yellow-300')).toBe(false);
    });


    it('does not highlight if the query is not found', () => {
        render(<TextHighlighted text="This is some text" query="xyz" />);
        expect(screen.getByText('This is some text')).toBeInTheDocument();
        const highlightedText = screen.queryByText('xyz');
        expect(highlightedText).not.toBeInTheDocument();
    });

    it('handles edge cases with special characters in text and query', () => {
        render(<TextHighlighted text="This is some !@#$%^&*()_+ text" query="!@#$" />);
        const highlightedText = screen.getByText('!@#$');
        expect(highlightedText).toBeInTheDocument();
    });

});