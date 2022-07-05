import React from 'react';

interface LanguageSelectProps {
  setLanguageFilter: (newLanguage?: string) => void;
  current?: string;
  languages: string[];
}

const buttonBaseClasses =
  'first:ml-0 my-1 mr-2 px-2 py-1 border-2 border-gray-700 rounded-sm transition-colors ';

const buttonClassNames = {
  default:
    buttonBaseClasses +
    'text-gray-900 bg-gray-100 hover:bg-gray-300 focus:bg-gray-200',
  selected: buttonBaseClasses + 'text-gray-100 bg-gray-800 shadow',
};

export function LanguageSelect({
  setLanguageFilter,
  current,
  languages,
}: LanguageSelectProps): React.ReactElement<any, any> {
  const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const language = (event.target as HTMLButtonElement).getAttribute(
      'data-language'
    );

    if (!language) {
      throw new Error('Language not found on selector button');
    }

    if (current === language) {
      // If already selected, then clear selection
      setLanguageFilter();
    } else {
      setLanguageFilter(language ?? undefined);
    }
  };

  return (
    <div>
      <p className="flex items-center">Filter by: </p>
      <div className="flex flex-wrap mb-4">
        {languages.map((lang) => (
          <button
            key={`language-select-${lang}`}
            data-language={lang}
            onClick={buttonClickHandler}
            className={
              buttonClassNames[lang === current ? 'selected' : 'default']
            }
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
