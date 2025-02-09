type TextHighlightedProps = {
  text: string;
  query?: string;
  highlightClass?: string;
};

const TextHighlighted: React.FC<TextHighlightedProps> = ({
  text,
  query = "",
  highlightClass,
}) => {
  if (!text || !query) {
    return <>{text}</>;
  }

  const normalizedQuery = query.trim().toLowerCase();
  const normalizedText = text.trim().toLowerCase();

  if (!normalizedQuery) return <>{text}</>;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  while (true) {
    const startIndex = normalizedText.indexOf(normalizedQuery, lastIndex);

    if (startIndex === -1) {
      parts.push(text.substring(lastIndex));
      break;
    }

    parts.push(text.substring(lastIndex, startIndex));
    parts.push(
      <span
        key={startIndex}
        className={
          highlightClass ||
          "bg-yellow-300 dark:bg-yellow-600 text-black dark:text-white font-bold"
        }
      >
        {text.substring(startIndex, startIndex + normalizedQuery.length)}
      </span>
    );
    lastIndex = startIndex + normalizedQuery.length;
  }

  return <>{parts}</>;
};

export default TextHighlighted;
