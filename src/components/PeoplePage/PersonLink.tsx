import { Person } from '../../types';

interface Props {
  name: string | null;
  people: Person[];
  className?: string;
}

export const PersonLink = ({ name, people }: Props) => {
  const found = people?.find(person => person.name === name) ?? null;

  return (
    <>
      {name ? (
        found ? (
          <a
            href={`#/people/${found.slug}`}
            className={found.sex === 'f' ? 'has-text-danger' : undefined}
          >
            {name}
          </a>
        ) : (
          `${name}`
        )
      ) : (
        '-'
      )}
    </>
  );
};
