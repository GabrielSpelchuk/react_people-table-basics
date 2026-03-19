import { Person } from '../../types';

interface Props {
  person: Person | undefined;
}

export const PersonLink = ({ person }: Props) => {
  return (
    <>
      <a
        href={`#/people/${person?.slug}`}
        className={person?.sex === 'f' ? 'has-text-danger' : undefined}
      >
        {person?.name}
      </a>
    </>
  );
};
