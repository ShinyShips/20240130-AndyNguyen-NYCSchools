// Generated by CodiumAI

describe('SchoolCard', () => {

    // Renders a Card component with school name, address, phone number, and website.
    it('should render a Card component with school information', () => {
      const school = {
        school_name: "Example School",
        primary_address_line_1: "123 Main St",
        phone_number: "555-1234",
        website: "www.exampleschool.com",
        sat_critical_reading_avg_score: 500,
        sat_math_avg_score: 550,
        sat_writing_avg_score: 600,
        overview_paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };

      render(<SchoolCard school={school} />);

      expect(screen.getByText("Example School")).toBeInTheDocument();
      expect(screen.getByText("123 Main St")).toBeInTheDocument();
      expect(screen.getByText("555-1234")).toBeInTheDocument();
      expect(screen.getByText("www.exampleschool.com")).toBeInTheDocument();
    });

    // Renders a Badge component with SAT Reading, Math, and Writing scores.
    it('should render a Badge component with SAT scores', () => {
      const school = {
        school_name: "Example School",
        primary_address_line_1: "123 Main St",
        phone_number: "555-1234",
        website: "www.exampleschool.com",
        sat_critical_reading_avg_score: 500,
        sat_math_avg_score: 550,
        sat_writing_avg_score: 600,
        overview_paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };

      render(<SchoolCard school={school} />);

      expect(screen.getByText("SAT Reading: 500")).toBeInTheDocument();
      expect(screen.getByText("SAT Math: 550")).toBeInTheDocument();
      expect(screen.getByText("SAT Writing: 600")).toBeInTheDocument();
    });

    // Renders a DrawerDialog component with school information.
    it('should render a DrawerDialog component with school information', () => {
      const school = {
        school_name: "Example School",
        primary_address_line_1: "123 Main St",
        phone_number: "555-1234",
        website: "www.exampleschool.com",
        sat_critical_reading_avg_score: 500,
        sat_math_avg_score: 550,
        sat_writing_avg_score: 600,
        overview_paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };

      render(<SchoolCard school={school} />);

      fireEvent.click(screen.getByText("See School Profile"));

      expect(screen.getByText("School Profile")).toBeInTheDocument();
      expect(screen.getByText("Example School")).toBeInTheDocument();
      expect(screen.getByText("123 Main St")).toBeInTheDocument();
      expect(screen.getByText("555-1234")).toBeInTheDocument();
      expect(screen.getByText("www.exampleschool.com")).toBeInTheDocument();
      expect(screen.getByText("SAT Reading: 500")).toBeInTheDocument();
      expect(screen.getByText("SAT Math: 550")).toBeInTheDocument();
      expect(screen.getByText("SAT Writing: 600")).toBeInTheDocument();
      expect(screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")).toBeInTheDocument();
    });

    // Renders a Card component with default values if school object is undefined or null.
    it('should render a Card component with default values when school object is undefined', () => {
      render(<SchoolCard school={undefined} />);

      expect(screen.getByText("Not Found")).toBeInTheDocument();
    });

    // Renders a Badge component with "Not Found" if SAT scores are undefined or null.
    it('should render a Badge component with "Not Found" when SAT scores are undefined', () => {
      const school = {
        school_name: "Example School",
        primary_address_line_1: "123 Main St",
        phone_number: "555-1234",
        website: "www.exampleschool.com",
        sat_critical_reading_avg_score: undefined,
        sat_math_avg_score: undefined,
        sat_writing_avg_score: undefined,
        overview_paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };

      render(<SchoolCard school={school} />);

      expect(screen.getByText("SAT Reading: Not Found")).toBeInTheDocument();
      expect(screen.getByText("SAT Math: Not Found")).toBeInTheDocument();
      expect(screen.getByText("SAT Writing: Not Found")).toBeInTheDocument();
    });
});
