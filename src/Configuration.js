import _ from 'lodash';

function configureWork(work, workConfig) {
  return _.map(work, w => {
    const config = _.find(workConfig, c => w.company === c.company);
    const highlights =  _.take(w.highlights, _.get(config, "highlights.showUntil", _.size(w.highlights)));
    return _.extend(w, { highlights });
  });
}

function configureProjects(projects, {showUntil}) {
  return _.take(projects, _.isNil(showUntil) ? _.size(projects) : showUntil);
}

function configureEducation(education, educationConfig) {
  return _.map(education, e => {
    const config = _.find(educationConfig, c => c.institution === e.institution);
    return _.extend(e, { highlights: _.get(config, "highlights.hide") ? [] : e.highlights });
  });
}

export function configure(resume, config) {
  return _.extend(resume, {
    work: configureWork(resume.work, config.work),
    projects: configureProjects(resume.projects, config.projects),
    education: configureEducation(resume.education, config.education)
  });
}
