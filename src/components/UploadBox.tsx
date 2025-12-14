type Props = {
  onUpload: (file: File) => void;
};

export default function UploadBox({ onUpload }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div
      style={{
        border: "2px dashed #3b82f6",
        padding: "30px",
        textAlign: "center",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{ marginBottom: "10px" }}
      />
      <p>📸 Upload FF scoreboard screenshot</p>
    </div>
  );
}
