import assert from 'node:assert/strict';
import test from 'node:test';

import {
	FOOTBALL_QUIZ_GAME_LENGTH,
	FOOTBALL_QUIZ_QUESTIONS,
} from '../src/data/footballQuiz.ts';

function findQuestion(term) {
	const question = FOOTBALL_QUIZ_QUESTIONS.find((candidate) => candidate.term === term);

	assert.ok(question, `Expected a quiz question for "${term}"`);
	return question;
}

function getQuestionSentence(term) {
	const question = findQuestion(term);
	const prompt = question.context
		? `${question.prompt.charAt(0).toLocaleLowerCase('de-AT')}${question.prompt.slice(1)}`
		: question.prompt;

	return [question.context ? `${question.context},` : null, prompt, `${question.term}?`]
		.filter(Boolean)
		.join(' ');
}

test('provides enough questions for the balanced eleven-question game', () => {
	const counts = Object.groupBy(
		FOOTBALL_QUIZ_QUESTIONS,
		(question) => question.difficulty,
	);

	assert.equal(FOOTBALL_QUIZ_GAME_LENGTH, 11);
	assert.ok((counts.easy?.length ?? 0) >= 6);
	assert.ok((counts.medium?.length ?? 0) >= 3);
	assert.ok((counts.hard?.length ?? 0) >= 2);
});

test('uses unique terms and four distinct answers per question', () => {
	const terms = FOOTBALL_QUIZ_QUESTIONS.map((question) => question.term);

	assert.equal(new Set(terms).size, terms.length);

	for (const question of FOOTBALL_QUIZ_QUESTIONS) {
		const answers = [question.correctAnswer, ...question.wrongAnswers];

		assert.equal(answers.length, 4);
		assert.equal(new Set(answers).size, answers.length, question.term);
	}
});

test('builds the complete requested question sentences', () => {
	assert.equal(
		getQuestionSentence('hinter den Ball kommen'),
		'Beim Verteidigen, was bedeutet hinter den Ball kommen?',
	);
	assert.equal(
		getQuestionSentence('ein Abschluss'),
		'Beim Angreifen, was ist ein Abschluss?',
	);
	assert.equal(
		getQuestionSentence('eine Abseitsfalle'),
		'Was ist eine Abseitsfalle?',
	);
	assert.equal(getQuestionSentence('die lange Ecke'), 'Was ist die lange Ecke?');
	assert.equal(getQuestionSentence('ein Corner'), 'Was ist ein Corner?');
	assert.equal(getQuestionSentence('ein Stanglpass'), 'Was ist ein Stanglpass?');
	assert.equal(getQuestionSentence('Pressing'), 'Was ist Pressing?');
});
