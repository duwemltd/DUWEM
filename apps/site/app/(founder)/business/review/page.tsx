"use client";


import { useRouter } from "next/navigation";

import { Typography } from "@repo/ui";
import {
  ConversationLayout,
  JourneyQuestion,
} from "../../../components/journey";

import { useFoundingConversationStore } from "../../../../stores/foundingConversationStore";

import { AnswerReviewCard } from "./AnswerReviewCard";

import { questions } from "../conversation/data";
import router from "next/dist/shared/lib/router/router";

export default function BusinessReviewPage() {
  const router = useRouter();

  const { answers } = useFoundingConversationStore();

  const reviewItems = questions.map((question) => {
    const answer = answers[question.id];

    const values = Array.isArray(answer)
      ? answer
      : answer
        ? [answer]
        : [];

    const labels = values.map((value) => {
      const option = question.options.find(
        (option) => option.id === value
      );

      return option?.title ?? value;
    });

    return {
      icon: question.reviewIcon,
      title: question.reviewTitle ?? question.title,
      answers:
        labels.length > 0
          ? labels
          : ["No answer selected"],
    };
  });

  return (
    <ConversationLayout
      step={5}
      total={5}
      title="Your Business Profile"
      description={
        <Typography variant="body-lg">
          Review your business profile before joining DUWEM as a Founding Voice.
        </Typography>
      }
      nextLabel="Become a Founding Voice"
      onNext={() => router.push("/business/confirm")}
    >
      <JourneyQuestion
        title=""
        description=""
      >
        {reviewItems.map((item, index) => (
          <AnswerReviewCard
            key={index}
            icon={item.icon}
            title={item.title}
            answers={item.answers}
          />
        ))}
      </JourneyQuestion>
    </ConversationLayout>
  );
}