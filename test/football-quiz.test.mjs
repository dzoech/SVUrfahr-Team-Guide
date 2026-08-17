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

test('limits prompts and contexts to the supported wording', () => {
	const prompts = new Set(FOOTBALL_QUIZ_QUESTIONS.map((question) => question.prompt));
	const contexts = new Set(
		FOOTBALL_QUIZ_QUESTIONS.flatMap((question) =>
			question.context ? [question.context] : [],
		),
	);

	assert.deepEqual(prompts, new Set(['Was ist', 'Was bedeutet']));
	assert.deepEqual(contexts, new Set(['Beim Verteidigen', 'Beim Angreifen']));
});

test('adds context to the defending and attacking examples', () => {
	assert.deepEqual(
		{
			context: findQuestion('hinter den Ball kommen').context,
			prompt: findQuestion('hinter den Ball kommen').prompt,
		},
		{
			context: 'Beim Verteidigen',
			prompt: 'Was bedeutet',
		},
	);
	assert.deepEqual(
		{
			context: findQuestion('ein Abschluss').context,
			prompt: findQuestion('ein Abschluss').prompt,
		},
		{
			context: 'Beim Angreifen',
			prompt: 'Was ist',
		},
	);
	assert.equal(findQuestion('eine Abseitsfalle').prompt, 'Was ist');
});
