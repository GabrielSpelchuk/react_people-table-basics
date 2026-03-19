import { Person } from '../../types';
import { PersonLink } from './PersonLink';

interface Props {
  people: Person[] | null;
  activeSlug?: string;
}

export const PeopleTable = ({ people, activeSlug }: Props) => {
  return (
    <>
      {!people ? (
        <p data-cy="noPeopleMessage">There are no people on the server</p>
      ) : (
        <table
          data-cy="peopleTable"
          className="table is-striped is-hoverable is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Sex</th>
              <th>Born</th>
              <th>Died</th>
              <th>Mother</th>
              <th>Father</th>
            </tr>
          </thead>

          <tbody>
            {people.map(person => (
              <tr
                data-cy="person"
                key={person.name}
                className={
                  person.slug === activeSlug
                    ? 'has-background-warning'
                    : undefined
                }
              >
                <td>
                  <a
                    href={`#/people/${person.slug}`}
                    className={
                      person.sex === 'f' ? 'has-text-danger' : undefined
                    }
                  >
                    {person.name}
                  </a>
                </td>

                <td>{person.sex}</td>
                <td>{person.born}</td>
                <td>{person.died}</td>
                <td>
                  <PersonLink name={person.motherName} people={people} />
                </td>
                <td>
                  <PersonLink name={person.fatherName} people={people} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
