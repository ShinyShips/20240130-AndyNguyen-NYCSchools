describe('DrawerDialog', () => {

    // Renders a button with text 'School Profile' when the screen width is greater than or equal to 768px.
    it('should render a button with text "School Profile" when the screen width is greater than or equal to 768px', () => {
      // Arrange
        const school = {
            total_students: 1000,
            extracurricular_activities: "Chess Club, Drama Club, Debate Club",
            school_sports: "Basketball, Soccer, Volleyball",
            language_classes: "Spanish, French, German",
            bus: "Bus 1, Bus 2, Bus 3",
        };

      // Act
        const { getByText } = render(<DrawerDialog school={school} />);
        const button = getByText('School Profile');

        // Assert
        expect(button).toBeInTheDocument();
    });

    // Renders a button with text 'See School Profile' when the screen width is less than 768px.
    it('should render a button with text "See School Profile" when the screen width is less than 768px', () => {
      // Arrange
        const school = {
            total_students: 1000,
            extracurricular_activities: "Chess Club, Drama Club, Debate Club",
            school_sports: "Basketball, Soccer, Volleyball",
            language_classes: "Spanish, French, German",
            bus: "Bus 1, Bus 2, Bus 3",
        };

      // Act
        const { getByText } = render(<DrawerDialog school={school} />);
        const button = getByText('See School Profile');

      // Assert
        expect(button).toBeInTheDocument();
    });

    // Clicking the 'School Profile' button opens a dialog box with the title 'School Profile'.
    it('should open a dialog box with the title "School Profile" when the "School Profile" button is clicked', () => {
      // Arrange
        const school = {
            total_students: 1000,
            extracurricular_activities: "Chess Club, Drama Club, Debate Club",
            school_sports: "Basketball, Soccer, Volleyball",
            language_classes: "Spanish, French, German",
            bus: "Bus 1, Bus 2, Bus 3",
        };

      // Act
        const { getByText, getByRole } = render(<DrawerDialog school={school} />);
        const button = getByText('School Profile');
        fireEvent.click(button);
        const dialogTitle = getByRole('heading', { name: 'School Profile' });

      // Assert
        expect(dialogTitle).toBeInTheDocument();
    });

    // When the 'school' prop is undefined, the component renders with 'Not Found' as the total number of students.
    it('should render with "Not Found" as the total number of students when the "school" prop is undefined', () => {
      // Arrange
        const school = undefined;

      // Act
        const { getByText } = render(<DrawerDialog school={school} />);
        const totalStudents = getByText('Not Found total students');

      // Assert
        expect(totalStudents).toBeInTheDocument();
    });
});
