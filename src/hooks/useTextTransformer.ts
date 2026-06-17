import { useMemo } from 'react';

export interface UseTextTransformerReturn {
  processedText: string;
  originalLength: number;
  processedLength: number;
  percentageOfOriginal: number;
  hasContent: boolean;
  hasProcessedContent: boolean;
}

export function useTextTransformer(inputText: string): UseTextTransformerReturn {
  const result = useMemo(() => {
    const processed = inputText
      .split('')
      .filter((_, i) => i % 2 === 0)
      .join('');

    const originalLen = inputText.length;
    const processedLen = processed.length;
    const percentage = originalLen > 0
      ? Math.round((processedLen / originalLen) * 100)
      : 0;

    return {
      processedText: processed,
      originalLength: originalLen,
      processedLength: processedLen,
      percentageOfOriginal: percentage,
      hasContent: originalLen > 0,
      hasProcessedContent: processedLen > 0,
    };
  }, [inputText]);

  return result;
}
