import { useState } from 'react';

export interface UseClipboardReturn {
  text: string;
  setText: (value: string) => void;
  pasteFromClipboard: () => Promise<void>;
  copyToClipboard: (value: string) => Promise<void>;
  error: string | null;
}

export function useClipboard(initialValue: string = ''): UseClipboardReturn {
  const [text, setText] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const pasteFromClipboard = async (): Promise<void> => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
      setError(null);
    } catch (err) {
      const message = 'Failed to read clipboard contents';
      console.error(message, err);
      setError(message);
      throw err;
    }
  };

  const copyToClipboard = async (value: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(value);
      setError(null);
    } catch (err) {
      const message = 'Failed to write to clipboard';
      console.error(message, err);
      setError(message);
      throw err;
    }
  };

  return {
    text,
    setText,
    pasteFromClipboard,
    copyToClipboard,
    error,
  };
}
