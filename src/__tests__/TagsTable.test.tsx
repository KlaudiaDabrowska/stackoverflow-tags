import { render, screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupServer } from "msw/node";
import generateTagsResponse from "@/utils/mocks/generateTagsResponse";
import TagsTable from "@/components/Table/TagsTable";

const queryClient = new QueryClient();

const server = setupServer();

jest.mock("next/navigation", () => ({
  ...require("next-router-mock"),
  useRouter: () => ({
    push: () => jest.fn(),
  }),
  useSearchParams: () => ({
    get: (key: String) => "1",
  }),
}));

describe("Tags Table", () => {
  const tagsResponse = generateTagsResponse(10, 100);

  beforeAll(() => {
    server.listen();

    render(
      <QueryClientProvider client={queryClient}>
        <TagsTable />
      </QueryClientProvider>
    );
  });

  beforeEach(() => {
    server.resetHandlers();
    queryClient.clear();
  });

  afterAll(() => server.close());

  it("should get ten tags in a table", () => {
    server.use(
      http.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/2.3/tags?page=1&pagesize=10&order=desc&sort=popular&site=stackoverflow&filter=!nNPvSNVZBz`,
        () => HttpResponse.json({ tagsResponse })
      )
    );

    expect(tagsResponse.tags.length).toBe(10);
  });
  it("should render tags name in a table", () => {
    server.use(
      http.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/2.3/tags?page=1&pagesize=10&order=desc&sort=popular&site=stackoverflow&filter=!nNPvSNVZBz`,
        () => HttpResponse.json({ tagsResponse })
      )
    );

    tagsResponse.tags.forEach(async (tag) => {
      expect(await screen.findByText(tag.name)).toBeInTheDocument();
    });
  });
});
