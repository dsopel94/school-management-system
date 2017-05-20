import Period from '../models/Period';
import cuid from 'cuid';
// import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Periods
 * @param req
 * @param res
 * @returns void
 */
export function getPeriods(req, res) {
  Period.find().exec((err, periods) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ periods });
  });
}
export function addPeriod(req, res) {
  if (!req.body.period.number || !req.body.period.start || !req.body.period.duration) {
    res.status(403).end();
  }
  const newPeriod = new Period(req.body.period);
  // Let's sanitize inputs
  newPeriod.number = sanitizeHtml(newPeriod.number);
  newPeriod.start = sanitizeHtml(newPeriod.start);
  newPeriod.duration = sanitizeHtml(newPeriod.duration);
  newPeriod.cuid = cuid();
  newPeriod.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
  return res.json({ message: 'posted' });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPeriod(req, res) {
  Period.findOne({ cuid: req.params.cuid }).exec((err, period) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ period });
  });
  return res.json({ message: 'got Period' });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePeriod(req, res) {
  Period.findOne({ cuid: req.params.cuid }).exec((err, period) => {
    if (err) {
      res.status(500).send(err);
    }
    period.remove(() => {
      res.status(200).end();
    });
  });
  return res.status(200).end();
}
