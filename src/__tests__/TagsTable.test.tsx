import { render, screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupServer } from "msw/node";
import generateTagsResponse from "@/utils/mocks/generateTagsResponse";
import TagsTable from "@/components/TagsTable";

const queryClient = new QueryClient();

const server = setupServer();

describe("Tags Table", () => {
  const tagsResponse = generateTagsResponse(10, 100);

  beforeAll(() => {
    server.listen();
    server.use(
      http.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/2.3/tags?page=1&pagesize=10&order=desc&sort=popular&site=stackoverflow&filter=!nNPvSNVZBz`,
        () => HttpResponse.json({ tagsResponse })
      )
    );
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

  it("should render ten tags in a table", () => {
    expect(tagsResponse.tags.length).toBe(10);
  });
  //   it("should render users name in a table", () => {
  //     usersResponse.users.forEach(async (user) => {
  //       expect(await screen.findByText(user.name)).toBeInTheDocument();
  //     });
  //   });
});
