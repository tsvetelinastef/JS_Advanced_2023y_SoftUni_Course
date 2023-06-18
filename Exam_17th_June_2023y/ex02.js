class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    const addedCandidates = [];
    candidates.forEach(candidateInfo => {
      const [name, education, yearsExperience] = candidateInfo.split('-');
      const existingCandidate = this.jobCandidates.find(candidate => candidate.name === name);

      if (existingCandidate) {
        if (parseInt(yearsExperience) > existingCandidate.yearsExperience) {
          existingCandidate.yearsExperience = parseInt(yearsExperience);
        }
      } else {
        this.jobCandidates.push({
          name,
          education,
          yearsExperience: parseInt(yearsExperience)
        });
        addedCandidates.push(name);
      }
    });

    return `You successfully added candidates: ${addedCandidates.join(', ')}.`;
  }

  jobOffer(chosenPerson) {
    const [name, minimalExperience] = chosenPerson.split('-');
    const selectedCandidate = this.jobCandidates.find(candidate => candidate.name === name);

    if (!selectedCandidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (selectedCandidate.yearsExperience < parseInt(minimalExperience)) {
      throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
    }

    selectedCandidate.yearsExperience = 'hired';
    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    const selectedCandidate = this.jobCandidates.find(candidate => candidate.name === name);

    if (!selectedCandidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    let salary;
    if (selectedCandidate.education === 'Bachelor') {
      salary = '$50,000';
    } else if (selectedCandidate.education === 'Master') {
      salary = '$60,000';
    } else {
      salary = '$40,000';
    }

    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary} per year!`;
  }

  candidatesDatabase() {
    if (this.jobCandidates.length === 0) {
      throw new Error('Candidate Database is empty!');
    }

    const sortedCandidates = this.jobCandidates
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));

    const candidatesInfo = sortedCandidates
      .map(candidate => `${candidate.name}-${candidate.yearsExperience}`)
      .join('\n');

    return `Candidates list:\n${candidatesInfo}`;
  }
}

module.exports = JobOffers;
