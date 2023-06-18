const chai = require('chai');
const expect = chai.expect;
const JobOffers = require('./JobOffers');

describe('JobOffers', function() {
  let jobOffers;

  beforeEach(function() {
    jobOffers = new JobOffers('Google', 'Strategy Analyst');
  });

  describe('jobApplication', function() {
    it('should add candidates and return a success message', function() {
      const candidates = ['John Doe-Bachelor-10', 'Peter Parker-Master-5', 'Daniel Jones-Bachelor-18'];
      const result = jobOffers.jobApplication(candidates);
      const expected = 'You successfully added candidates: John Doe, Peter Parker, Daniel Jones.';
      expect(result).to.equal(expected);
    });

    it('should update yearsExperience for existing candidates', function() {
      jobOffers.jobCandidates = [
        { name: 'John Doe', education: 'Bachelor', yearsExperience: 5 },
        { name: 'Peter Parker', education: 'Master', yearsExperience: 2 }
      ];

      const candidates = ['John Doe-Bachelor-10', 'Peter Parker-Master-5'];
      jobOffers.jobApplication(candidates);

      expect(jobOffers.jobCandidates[0].yearsExperience).to.equal(10);
      expect(jobOffers.jobCandidates[1].yearsExperience).to.equal(5);
    });
  });

  describe('jobOffer', function() {
    beforeEach(function() {
      jobOffers.jobCandidates = [
        { name: 'John Doe', education: 'Bachelor', yearsExperience: 10 },
        { name: 'Peter Parker', education: 'Master', yearsExperience: 5 }
      ];
    });

    it('should hire a candidate and return a success message', function() {
      const result = jobOffers.jobOffer('John Doe-8');
      const expected = 'Welcome aboard, our newest employee is John Doe.';
      expect(result).to.equal(expected);
      expect(jobOffers.jobCandidates[0].yearsExperience).to.equal('hired');
    });

    it('should throw an error if the candidate is not in the candidates list', function() {
      expect(() => jobOffers.jobOffer('Bruce Wayne-8')).to.throw('Bruce Wayne is not in the candidates list!');
    });

    it('should throw an error if the candidate does not meet the minimum experience requirement', function() {
      expect(() => jobOffers.jobOffer('John Doe-12')).to.throw('John Doe does not have enough experience as Strategy Analyst, minimum requirement is 12 years.');
    });
  });

  describe('salaryBonus', function() {
    beforeEach(function() {
      jobOffers.jobCandidates = [
        { name: 'John Doe', education: 'Bachelor', yearsExperience: 10 },
        { name: 'Peter Parker', education: 'Master', yearsExperience: 5 },
        { name: 'Bruce Wayne', education: 'PhD', yearsExperience: 8 }
      ];
    });

    it('should return the salary message for a candidate with Bachelor degree', function() {
      const result = jobOffers.salaryBonus('John Doe');
      const expected = 'John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!';
      expect(result).to.equal(expected);
    });

    it('should return the salary message for a candidate with Master degree', function() {
      const result = jobOffers.salaryBonus('Peter Parker');
      const expected = 'Peter Parker will sign a contract for Google, as Strategy Analyst with a salary of $60,000 per year!';
      expect(result).to.equal(expected);
    });

    it('should return the salary message for a candidate with other education', function() {
      const result = jobOffers.salaryBonus('Bruce Wayne');
      const expected = 'Bruce Wayne will sign a contract for Google, as Strategy Analyst with a salary of $40,000 per year!';
      expect(result).to.equal(expected);
    });

    it('should throw an error if the candidate is not in the candidates list', function() {
      expect(() => jobOffers.salaryBonus('Tony Stark')).to.throw('Tony Stark is not in the candidates list!');
    });
  });

  describe('candidatesDatabase', function() {
    it('should return the candidates list', function() {
      jobOffers.jobCandidates = [
        { name: 'Daniel Jones', education: 'Bachelor', yearsExperience: 18 },
        { name: 'John Doe', education: 'Bachelor', yearsExperience: 'hired' },
        { name: 'Jordan Cole', education: 'High School', yearsExperience: 'hired' },
        { name: 'Peter Parker', education: 'Master', yearsExperience: 'hired' }
      ];

      const result = jobOffers.candidatesDatabase();
      const expected = 'Candidates list:\nDaniel Jones-18\nJohn Doe-hired\nJordan Cole-hired\nPeter Parker-hired';
      expect(result).to.equal(expected);
    });

    it('should throw an error if the candidates database is empty', function() {
      expect(() => jobOffers.candidatesDatabase()).to.throw('Candidate Database is empty!');
    });
  });
});

